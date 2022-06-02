from celery import shared_task, Task
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync
from datetime import datetime
import random
import math
import time


channel_layer = get_channel_layer()


class CallbackTask(Task):
    def on_success(self, retval, task_id, args, kwargs):
        print(f"Task {task_id} is {retval}")


@shared_task(name="task1", base=CallbackTask)
def task1():
    
    number = 34
    result = 1
    for i in range(1000):
        result += number * random.randint(1, 100)

    info = {
        'task_name': 'task1',
        'info': 'multiply 34 thousand times by random value and calculates the sum.',
        'result': result,
        'finish time': datetime.now().strftime("%m/%d/%Y, %H:%M:%S"),
    }
    async_to_sync(channel_layer.group_send)('tasks', {'type': 'send_task_info', 'data': info})
    return result


@shared_task(name="task2", base=CallbackTask)
def task2():
    result = math.factorial(8)
    info = {
        'task_name': 'task2',
        'info': 'Computes factorial of 8',
        'result': result,
        'finish time': datetime.now().strftime("%m/%d/%Y, %H:%M:%S"),
    }
    async_to_sync(channel_layer.group_send)('tasks', {'type': 'send_task_info', 'data': info})
    return result


@shared_task(name="task3", base=CallbackTask)
def task3():
    time.sleep(10)
    info = {
        'task_name': 'task3',
        'info': 'sleeps.',
        'result': 'Done',
        'finish time': datetime.now().strftime("%m/%d/%Y, %H:%M:%S"),
    }
    async_to_sync(channel_layer.group_send)('tasks', {'type': 'send_task_info', 'data': info})
    return "DONE"