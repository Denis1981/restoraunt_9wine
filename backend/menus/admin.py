from django.contrib import admin
from django import forms
from .models import *

class MenusAdminForm(forms.ModelForm):

    class Meta:
        model = Menus
        fields = '__all__'

class MenusAdmin(admin.ModelAdmin):

    form = MenusAdminForm
    list_display = ('id', 'category', 'title', 'itemPrice', 'itemPriceTotal', 'created_at', 'is_published')
    list_display_links = ('id', 'title')
    search_fields = ('title', 'category', 'tags')
    fields = ('category', 'tags', 'title', 'itemPrice', 'itemPriceTotal', 'is_published')
    list_editable = ('is_published',)
    list_filter = ('is_published', 'category', 'tags')
    save_as = True
    save_on_top = True


class CategoryAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("title",)}


class TagAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("title",)}


admin.site.register(Menus, MenusAdmin)
admin.site.register(Tag, TagAdmin)
admin.site.register(Category, CategoryAdmin)


