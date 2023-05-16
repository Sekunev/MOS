from rest_framework import serializers
from .models import makineler, urunler, makine_icerikleri, makineUstGrub, urunUstGrub

class MakinelerSerializer(serializers.ModelSerializer):

    class Meta:
        model = makineler
        fields = (
            'id',
            'makine_adi',
            'makine_aciklamasi',
            'makine_ust_grup_id',
        )

class MakineUstGrupSerializer(serializers.ModelSerializer):
    makineler = MakinelerSerializer(many=True)

    class Meta:
        model = makineUstGrub
        fields = (
            'id',
            'makine_Ust_Grup_adi',
            'makineler'
        )
class UrunlerSerializer(serializers.ModelSerializer):

    class Meta:
        model = urunler
        fields = (
            'id',
            'urun_adi',
            'urun_aciklamasi',
            'urun_ust_grup_id',
        )

class UrunUstGrubSerializer(serializers.ModelSerializer):
    urunler = UrunlerSerializer(many=True)
    class Meta:
        model = urunUstGrub
        fields = (
            'id',
            'urun_Ust_Grup_adi',
            'urunler'
        )


        
class makine_icerikleriSerializer(serializers.ModelSerializer):
    # makineler = serializers.StringRelatedField() 
    # urun = serializers.StringRelatedField() 
    class Meta:
        model = makine_icerikleri
        fields = (
            'id',
            'makine',
            'urun',
            'urun_adedi',
        )
        # API'de gösterilecek Field'ler.