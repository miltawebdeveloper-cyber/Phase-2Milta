import { createClient } from '@supabase/supabase-js';

// Supabase client — used directly for blog reads (public data, no backend needed)
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

// Backend API — used for write operations (contact, applications)
const API_BASE = import.meta.env.VITE_API_URL || (import.meta.env.PROD
  ? 'https://milta-website.onrender.com/api'
  : '/api');

/* =========================================
   BLOG READS — directly via Supabase (always available)
   ========================================= */

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

    const { data: latestPosts } = await supabase
      .from('blogs')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(5);

    return { blog, latestPosts: latestPosts || [] };
  } catch (error) {
    console.error('getBlogBySlug error:', error.message || error);
    return null;
  }
};

export const updateBlogContent = async (id, content, table = 'blogs') => {
  try {
    const response = await fetch(`${API_BASE}/blogs/${id}/update`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content, table }),
    });
    if (!response.ok) throw new Error('Failed to update blog content');
    return await response.json();
  } catch (error) {
    console.error('updateBlogContent error:', error);
    return { error };
  }
};

/* =========================================
   WRITE OPERATIONS — via backend API
   ========================================= */

export const submitContactForm = async (data) => {
  try {
    const response = await fetch(`${API_BASE}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || 'Failed to submit contact');
    }

    return await response.json();
  } catch (error) {
    console.error('submitContactForm error:', error);
    return { error: error.message || error };
  }
};

export const submitNewsletterForm = async (data) => {
  try {
    const response = await fetch(`${API_BASE}/newsletter`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || 'Failed to submit newsletter subscription');
    }

    return await response.json();
  } catch (error) {
    console.error('submitNewsletterForm error:', error);
    return { error: error.message || error };
  }
};

export const submitApplicationForm = async (formData) => {
  try {
    const response = await fetch(`${API_BASE}/apply`, {
      method: 'POST',
      body: formData, // FormData directly
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || 'Failed to submit application');
    }

    return await response.json();
  } catch (error) {
    console.error('submitApplicationForm error:', error);
    return { error: error.message || error };
  }
};
