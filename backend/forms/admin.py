from django.contrib import admin
from django import forms
from .models import *

class FormsReserveAdminForm(forms.ModelForm):

    class Meta:
        model = FormsReserve
        fields = '__all__'


class FormsReserveAdmin(admin.ModelAdmin):

    form = FormsReserveAdminForm
    list_display = ('id', 'title', 'phone', 'comment', 'dateReserve', 'timeReserve', 'quantity')
    list_display_links = ('id', 'title')
    search_fields = ('title',)
    readonly_fields = ('created_at', 'updated_at')
    fields = ('title', 'phone', 'comment', 'dateReserve', 'timeReserve', 'quantity')
    save_as = True
    save_on_top = True

admin.site.register(FormsReserve, FormsReserveAdmin)