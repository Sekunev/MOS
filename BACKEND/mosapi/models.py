from django.db import models

# Create your models here.
class makineUstGrub(models.Model):
    makine_Ust_Grup_adi = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.makine_Ust_Grup_adi}"
    
class makineler(models.Model):
    makine_adi = models.CharField(max_length=50)
    makine_aciklamasi = models.CharField(max_length=50)
    makine_ust_grup_id = models.ForeignKey(makineUstGrub, related_name='makineler', on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.makine_adi}"
    
class urunUstGrub(models.Model):
    urun_Ust_Grup_adi = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.urun_Ust_Grup_adi}"

class urunler(models.Model):
    urun_adi = models.CharField(max_length=50)
    urun_aciklamasi = models.CharField(max_length=50)
    urun_ust_grup_id = models.ForeignKey(urunUstGrub, related_name='urunler', on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.urun_adi}"
    
class makine_icerikleri(models.Model):
    makine = models.ForeignKey(makineler, on_delete=models.CASCADE)
    urun = models.ForeignKey(urunler, on_delete=models.CASCADE)
    urun_adedi = models.IntegerField()

    def __str__(self):
        return f"{self.makine} {self.urun} {self.urun_adedi}"