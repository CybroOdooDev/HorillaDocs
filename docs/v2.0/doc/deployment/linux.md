
# Horilla Deployment using a Single Service File on Linux

## Step 1: Create a Service File for Horilla

Create a systemd service file to manage the Horilla application.

```bash
sudo nano /etc/systemd/system/horilla.service
```

Add the following configuration to the service file. Make sure to specify the port you want Horilla to run on (default here is `8000`):

```ini
[Unit]
Description=Horilla Development Server
After=network.target

[Service]
User=ec2-user
Group=ec2-user
WorkingDirectory=/opt/Horilla_Main
Environment="DJANGO_SETTINGS_MODULE=horilla.settings"

ExecStart=/opt/Horilla_Main/horillavenv/bin/python3 manage.py runserver 0.0.0.0:8000
Restart=always

[Install]
WantedBy=multi-user.target
```

## Step 2: Reload Systemd and Start the Horilla Service

Reload the systemd daemon to recognize the new service file, enable the service to start on boot, and start the Horilla service.

```bash
sudo systemctl daemon-reload
sudo systemctl enable horilla.service
sudo systemctl start horilla.service
```

To check if Horilla is running correctly:

```bash
sudo systemctl status horilla.service
```

## Step 3: Activate the Virtual Environment and Collect Static Files

If Horilla is running successfully, activate the virtual environment and collect static files.

```bash
cd /opt/Horilla_Main
. horillavenv/bin/activate
python3 manage.py collectstatic
```

## Step 4: Configure for Production

1. Open `settings.py` and set `DEBUG` to `False` to prepare Horilla for production:

   ```bash
   sudo nano horilla/settings.py
   ```

   Inside `settings.py`:

   ```python
   DEBUG = False
   ```

2. Update the `ALLOWED_HOSTS` list in `settings.py` to include your domain or IP address:

   ```python
   ALLOWED_HOSTS = ['your-domain.com', 'your-ip-address']
   ```

## Step 5: Configure Media File Serving

If media files are not loading, add a route in `urls.py` to serve them.

1. Open `urls.py`:

   ```bash
   sudo nano horilla/urls.py
   ```

2. Import the `serve` function and configure the URL pattern for media files:

   ```python
   from django.conf import settings
   from django.views.static import serve

   urlpatterns = [
       # Other paths
   ]

   if not settings.DEBUG:
       urlpatterns += [
           path('media/<path:path>', serve, {'document_root': settings.MEDIA_ROOT}),
       ]
   ```

## Step 6: Restart the Horilla Service

After all changes, restart the Horilla service to apply the updates:

```bash
sudo systemctl restart horilla.service
```

## Summary

This guide should set up Horilla as a systemd service with static and media file serving in a production-like environment. You should now have Horilla running on your specified port, ready to handle requests.
