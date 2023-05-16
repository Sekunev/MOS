from django.urls import path, include
from rest_framework import routers
from .views import (MakinelerMVS, urunlerMVS, makine_icerikleriMVS, makineUstGrupadiMVS, urunUstGrupadiMVS)

router = routers.DefaultRouter()

router.register('makineustgroup', makineUstGrupadiMVS)
router.register('makineler', MakinelerMVS)
router.register('urunlerustgroup', urunUstGrupadiMVS)
router.register('urunler', urunlerMVS)
router.register('makine_icerikleri', makine_icerikleriMVS)

urlpatterns = [
    path('', include(router.urls)),
]