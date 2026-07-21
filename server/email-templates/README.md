# Brevo Transactional Email Templates

These are the notification emails sent by `server.js` when a visitor submits a form.
They are **not** loaded by the app at runtime — Brevo stores the template and the
server references it by ID. These files are the source of truth for what you paste
into Brevo, so edit here first, then copy into the dashboard.

## Templates

| File | Brevo ID | Env var | Sent by |
|---|---|---|---|
| `10-job-application.html` | 10 | `BREVO_JOB_TEMPLATE_ID` | `POST /api/apply` |
| `11-contact-and-newsletter.html` | 11 | `BREVO_CONTACT_TEMPLATE_ID`, `BREVO_NEWSLETTER_TEMPLATE_ID` | `POST /api/contact`, `POST /api/newsletter` |

Template 11 is shared by two forms. It branches on `params.form_type`
(`"contact"` vs `"newsletter"`) so the newsletter mail shows only the subscriber's
address instead of a page of empty contact fields.

## Suggested subject lines

Set these in the Brevo template settings — they accept the same merge tags.

**Template 10:**
```
New Job Application — {{ params.position }} ({{ params.firstName }})
```

**Template 11:**
```
{% if params.form_type == "newsletter" %}New Newsletter Subscriber{% else %}New Contact Enquiry — {{ params.service_interest }}{% endif %}
```

The template bodies avoid the `default` filter and use `{% if %}` blocks for
fallbacks instead. Brevo's template language is Django-based and is fussy about
filter syntax; `{% if %}` behaves predictably either way.

## Parameters sent by the server

Anything not listed here is **not** available to the template and will render empty.

**Template 10** — from `server.js` `brevoParams`:
`form_type`, `firstName`, `email`, `phone`, `jobType`, `position`, `reference`, `resumeURL`

`resumeURL` is the literal string `"Resume not uploaded"` when no file was attached;
the template checks for this and shows a warning notice instead of a download button.

**Template 11, contact path:**
`form_type` (`"contact"`), `first_name`, `last_name`, `company_name`, `email`,
`phone_number`, `how_did_you_find`, `service_interest`, `message`

**Template 11, newsletter path:**
`form_type` (`"newsletter"`), `email`, `subscriber_email`

## Installing a template in Brevo

1. **Campaigns → Templates → Transactional** tab → *New template*
2. Fill in the template name, the subject line from above, and the sender.
   The sender must be a **verified** address — see below.
3. In the design step choose **Code your own → Paste your code**, then paste the
   full contents of the `.html` file.
4. Save, then **toggle the template Active**. An inactive template makes the API
   return `400` and the send fails.
5. Confirm the ID Brevo assigned matches the table above. If it differs, update the
   corresponding `BREVO_*_TEMPLATE_ID` in `server/.env` rather than renumbering here.

## Sender address

`sendBrevoTemplateEmail` uses `BREVO_SENDER_EMAIL`, falling back to `BREVO_TO_EMAIL`
if unset. Whichever address ends up being used must be verified in
**Brevo → Senders, Domains & Dedicated IPs**. Sending as a `gmail.com` address will
fail DMARC and land in spam.

## Previewing

Brevo's *Send a test* only fills merge tags if you supply test data. Paste this into
the test-parameters box to see template 11's contact path render fully:

```json
{
  "form_type": "contact",
  "first_name": "Jane",
  "last_name": "Doe",
  "company_name": "Doe & Co Accounting",
  "email": "jane@example.com",
  "phone_number": "+1 555 0100",
  "how_did_you_find": "Google",
  "service_interest": "Bookkeeping Services",
  "message": "Looking for monthly bookkeeping for a 12-person firm."
}
```

Swap `form_type` to `"newsletter"` with just an `email` and `subscriber_email` to
check the other branch.
