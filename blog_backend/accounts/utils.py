from django.core.exceptions import ValidationError
from django.core.validators import validate_email as dj_validate_email


def validate_email(value):
    message_invalid = 'Enter a valid email.'
    
    if not value:
        return False, message_invalid
    try:
        dj_validate_email(value)
    except ValidationError:
        return False, message_invalid
    
    return True, ''