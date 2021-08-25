from channels.routing import ProtocolTypeRouter, URLRouter
from django.conf.urls import url
from django_eel.consumers import EelConsumer

application = ProtocolTypeRouter({
    "websocket": URLRouter([
        url(r"^eel$", EelConsumer.as_asgi())
    ]),
})