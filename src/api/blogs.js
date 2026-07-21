// Blog reads — served directly from Supabase (public data, no backend needed).
//
// Kept separate from api/client.js on purpose: createClient() runs at module
// scope, so anything importing this module pulls the whole Supabase SDK (~780 KB
// unminified) into its chunk. Only the lazy blog routes should import from here.
// Form posts are plain fetch calls and live in api/client.js, which every page
// (via ContactForm) imports eagerly — keep Supabase out of that graph.
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Guard: if env vars are missing, don't throw at import time (that would
// white-screen the whole app). Create the client only when configured.
const supabase =
  supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;

if (!supabase) {
  console.warn(
    'Supabase is not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in a .env file to load blogs.'
  );
}

export const getBlogs = async (params = {}) => {
  if (!supabase) return [];
  try {
    const { featured, editors_pick, limit, order, ascending, table } = params;
    const tableName = table || 'blogs';

    let query = supabase.from(tableName).select('*');

    if (featured === 'true' || featured === true) {
      query = query.eq('featured', true);
    }
    if (editors_pick === 'true' || editors_pick === true) {
      query = query.eq('editors_pick', true);
    }
    if (order) {
      const isAsc = ascending === 'true' || ascending === true;
      query = query.order(order, { ascending: isAsc });
    }
    if (limit) {
      query = query.limit(parseInt(limit, 10));
    }

    const { data, error } = await query;
    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('getBlogs error:', error.message || error);
    return [];
  }
};

export const getBlogBySlug = async (slug, table = 'blogs') => {
  if (!supabase) return null;
  try {
    const { data: blog, error } = await supabase
      .from(table)
      .select('*')
      .eq('slug', slug)
      .maybeSingle();

    if (error) throw error;
    if (!blog) return null;

    // Latest posts must come from the same table as the post itself, otherwise
    // a UK post would list US posts (and link to /uk/blogs/<us-slug>).
    const { data: latestPosts } = await supabase
      .from(table)
      .select('*')
      .order('created_at', { ascending: false })
      .limit(5);

    return { blog, latestPosts: latestPosts || [] };
  } catch (error) {
    console.error('getBlogBySlug error:', error.message || error);
    return null;
  }
};
