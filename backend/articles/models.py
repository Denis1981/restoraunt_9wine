from django.db import models

class Category(models.Model):
    title = models.CharField(max_length=150, db_index=True, verbose_name='Наименование категории')
    slug = models.SlugField(max_length=50, verbose_name='Url', unique=True)

    def get_absolute_url(self):
        return reverse('slug', kwargs={"slug": self.slug})

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'
        ordering = ['title']

class Tag(models.Model):
    title = models.CharField(max_length=50)
    slug = models.SlugField(max_length=50, verbose_name='Url', unique=True)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('slug', kwargs={"slug": self.pk})

    class Meta:
        verbose_name = 'Тег'
        verbose_name_plural = 'Теги'
        ordering = ['title']

class Articles(models.Model):
    category = models.ForeignKey(Category, on_delete=models.PROTECT, verbose_name='Категория')
    tags = models.ManyToManyField(Tag, blank=True, related_name='Тег')
    title = models.CharField(max_length=150, verbose_name='Название статьи')
    slug = models.SlugField(max_length=255, verbose_name='Url записи', unique=True)
    content = models.TextField(blank=True, verbose_name='Содержание статьи')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата публикации')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Дата обновления')
    photo = models.ImageField(upload_to='photos/%Y/%m/%d/', verbose_name='Изображение', blank=True)
    is_published = models.BooleanField(default=True, verbose_name='Дата публикации')
    author = models.CharField(max_length=100, verbose_name='Автор публикации')
    keywords = models.CharField(max_length=350, verbose_name='Ключи для SEO')
    description = models.TextField(max_length=350, verbose_name='Описание для SEO')
    views = models.IntegerField(default=0, verbose_name='Кол-во просмотров')

    def get_absolute_url(self):
        return reverse('articles', kwargs={"pk": self.pk})

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Статья'
        verbose_name_plural = 'Статьи'
        ordering = ['-created_at']




