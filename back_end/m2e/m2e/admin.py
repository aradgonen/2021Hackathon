from django.contrib import admin

from .models import Subject, Course, Answer, Question, Step, Exam, Material, SolutionKnowledge, Progress

admin.site.register(Subject)
admin.site.register(Course)
admin.site.register(Answer)
admin.site.register(Question)
admin.site.register(Step)
admin.site.register(Exam)
admin.site.register(Material)
admin.site.register(SolutionKnowledge)
admin.site.register(Progress)
