# SANTECH REPAIR GH

Premium Next.js homepage for SANTECH REPAIR GH, a phone and electronics repair and sales business in Ghana. The site uses the supplied SANTECH logo, local product and repair photography, an orange/yellow/charcoal brand palette, responsive App Router UI, Tailwind CSS, Lucide icons and a WhatsApp enquiry pathway.

## Latest corrections

- Replaced product placeholders with real local product photography and clearer product categories.
- Added Ghana-focused technician and customer-support copy throughout the page.
- Added a responsive Tawk.to-ready chat demo widget. It works as a visible demo by default and loads the live Tawk.to widget when the public environment variables are configured.
- Kept prices and stock enquiry-based so the site does not publish unconfirmed commercial details.

## Tawk.to configuration

Set these public environment variables in the deployment platform to connect the live widget:

```bash
NEXT_PUBLIC_TAWK_PROPERTY_ID=your_property_id
NEXT_PUBLIC_TAWK_WIDGET_ID=your_widget_id
```

Without those values, the site shows the Tawk.to demo panel and routes customers to the SANTECH WhatsApp repair desk.

## Development

```bash
npm install
npm run dev
npm run build
```
