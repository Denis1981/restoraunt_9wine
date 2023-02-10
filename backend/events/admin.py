from django.contrib import admin
from django import forms
from django.utils.safestring import mark_safe
from ckeditor_uploader.widgets import CKEditorUploadingWidget
from .models import *

class EventsAdminForm(forms.ModelForm):
    content = forms.CharField(widget=CKEditorUploadingWidget())

    class Meta:
        model = Events
        fields = '__all__'

class EventsAdmin(admin.ModelAdmin):
    form = EventsAdminForm
    list_display = ('id', 'title', 'created_at', 'updated_at', 'get_photo')
    list_display_links = ('id', 'title')
    search_fields = ('title',)
    readonly_fields = ('created_at', 'get_photo', 'updated_at',)
    fields = ('title', 'content', 'photo', 'get_photo', 'created_at', 'keywords', 'description', 'is_published')
    save_as = True
    save_on_top = True

    def get_photo(self, obj):
        if obj.photo:
            return mark_safe(f'<img src="{obj.photo.url}" width="50">')
        return '-'

    get_photo.short_description = 'Фото'

admin.site.register(Events, EventsAdmin)



