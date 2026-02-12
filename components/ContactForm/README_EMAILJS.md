# Enterprise Demo Form - EmailJS Setup

I have fixed the error in your `.env` file (there was an extra `s` at the end of your Public Key).

**CRITICAL STEP:** You MUST restart your terminal (run `npm run dev` again) for the `.env` changes to take effect.

## 1. Updated Template Variables
The form now sends all individual fields PLUS two extra helper variables (`name` and `time`) for your convenience. You can use any of these in your EmailJS template:

| Variable | Description |
| :--- | :--- |
| `{{name}}` | **Full Name** (Automatically combines First + Last Name) |
| `{{time}}` | **Submission Time** (e.g., "2/13/2026, 12:30 PM") |
| `{{firstName}}` | User's first name |
| `{{lastName}}` | User's last name |
| `{{email}}` | Work email |
| `{{phone}}` | Phone number |
| `{{company}}` | Company name |
| `{{companySize}}` | Company size |
| `{{productInterest}}` | Selected product interest |
| `{{message}}` | Additional info (optional) |

## 2. Recommended Email Template Body
Copy and paste this into your EmailJS "Design" tab. **IMPORTANT:** In your EmailJS dashboard settings, set the **"To Email"** to `connect@digitaldreamworksagency.com`.

```html
<div style="font-family: Arial, sans-serif; padding: 20px; border: 1px dashed #4F46E5; border-radius: 10px;">
  <h2 style="color: #4F46E5;">New Enterprise Demo Request</h2>
  <p><strong>Customer Name:</strong> {{name}}</p>
  <p><strong>Work Email:</strong> {{email}}</p>
  <p><strong>Phone:</strong> {{phone}}</p>
  <p><strong>Company:</strong> {{company}} ({{companySize}})</p>
  <p><strong>Product Interest:</strong> {{productInterest}}</p>
  
  <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
  
  <p><strong>Additional Info:</strong><br />{{message}}</p>
  
  <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
  
  <p style="font-size: 12px; color: #666;">Submitted on: {{time}}</p>
</div>
```

## 3. Environment Variables (Fixed)
Your `.env` file is already updated with your fixed IDs:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_0esyc0f
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_4frp3xh
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=Ay702FO03u4TK_zg5
```

## Troubleshooting
If messages aren't arriving at `connect@digitaldreamworksagency.com`:
1. Log into [EmailJS Dashboard](https://dashboard.emailjs.com/).
2. Go to **Email Templates** > select your template.
3. Click the **Settings** tab.
4. Ensure the **"To Email"** field contains `connect@digitaldreamworksagency.com`.
5. **Restart the server** after any `.env` changes.
