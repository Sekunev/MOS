from django.contrib import admin
from .models import makineler, urunler, makine_icerikleri, makineUstGrub, urunUstGrub

# Register your models here.
admin.site.register(makineUstGrub)
admin.site.register(makineler)
admin.site.register(urunUstGrub)
admin.site.register(urunler)
admin.site.register(makine_icerikleri)