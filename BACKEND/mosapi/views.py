from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import makineler, urunler, makine_icerikleri, makineUstGrub, urunUstGrub
from .serializers import MakinelerSerializer, UrunlerSerializer, makine_icerikleriSerializer, MakineUstGrupSerializer, UrunUstGrubSerializer
from rest_framework.viewsets import ModelViewSet

# Create your views here.
class makineUstGrupadiMVS(ModelViewSet):
    queryset = makineUstGrub.objects.all()
    serializer_class = MakineUstGrupSerializer


class MakinelerMVS(ModelViewSet):
    queryset = makineler.objects.all()
    serializer_class = MakinelerSerializer

class urunUstGrupadiMVS(ModelViewSet):
    queryset = urunUstGrub.objects.all()
    serializer_class = UrunUstGrubSerializer

class urunlerMVS(ModelViewSet):
    queryset = urunler.objects.all()
    serializer_class = UrunlerSerializer
    
class makine_icerikleriMVS(ModelViewSet):
    queryset = makine_icerikleri.objects.all()
    serializer_class = makine_icerikleriSerializer