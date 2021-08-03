from django.db import models


# Create your models here.

class Subject(models.Model):
    title = models.CharField(max_length=50)
    parent_subject = models.ForeignKey('self', null=True, blank=True, related_name='children_subjects',
                                       on_delete=models.SET_NULL)

    def __str__(self):
        return self.title


class SolutionKnowledge(models.Model):
    title = models.CharField(max_length=50)
    subject = models.ForeignKey(Subject, related_name='sks', on_delete=models.CASCADE)
    problem = models.CharField(max_length=50000)
    symptoms = models.CharField(max_length=50000)
    cause = models.CharField(max_length=50000)
    solution = models.CharField(max_length=50000)

    def __str__(self):
        return self.title


class Course(models.Model):
    title = models.CharField(max_length=50)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE, related_name='courses')

    def __str__(self):
        return self.title


class Material(models.Model):
    title = models.CharField(max_length=50)
    file_path = models.CharField(max_length=250)
    description = models.CharField(max_length=5000)

    def __str__(self):
        return self.title


class Step(models.Model):
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=50000)
    index = models.IntegerField()
    materials = models.ManyToManyField(Material, related_name='Steps')
    course = models.ForeignKey(Course, related_name='Steps', null=True, on_delete=models.SET_NULL)

    def __str__(self):
        return self.title


class Exam(models.Model):
    title = models.CharField(max_length=50)
    step = models.OneToOneField(Step, on_delete=models.CASCADE, related_name='exam')

    def __str__(self):
        return self.title


class Question(models.Model):
    exam = models.ForeignKey(Exam, on_delete=models.CASCADE, related_name='questions')
    question = models.CharField(max_length=5000)

    # answer = models.ForeignKey(Answer, on_delete=models.CASCADE())

    def __str__(self):
        return self.question


class Answer(models.Model):
    answer = models.CharField(max_length=5000)
    question = models.ForeignKey(Question, on_delete=models.CASCADE, related_name='answers')
    q = models.OneToOneField(Question, on_delete=models.CASCADE, related_name='correct_answer')

    def __str__(self):
        return self.answer
