#!/bin/bash


npm run build


if [ -d dist ]; then
    mv dist ba12a508-a1ef-42a7-a7f9-116f3f656e72
fi

echo "
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-l
RewriteRule . /index.html [L]
" > ba12a508-a1ef-42a7-a7f9-116f3f656e72/.htaccess


ssh -p 65002 u371241921@154.41.233.11 "rm -rf /home/u371241921/domains/rajraiyani.dev/public_html*"
scp -P 65002 -r ba12a508-a1ef-42a7-a7f9-116f3f656e72/* u371241921@154.41.233.11:/home/u371241921/domains/rajraiyani.dev/public_html
scp -P 65002 -r ba12a508-a1ef-42a7-a7f9-116f3f656e72/.htaccess u371241921@154.41.233.11:/home/u371241921/domains/rajraiyani.dev/public_html


rm -rf ba12a508-a1ef-42a7-a7f9-116f3f656e72

echo "Process completed successfully."
