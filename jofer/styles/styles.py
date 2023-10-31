"""Styles for the app."""

import reflex as rx
from jofer.styles.color import Color
from jofer.styles.fonts import Fonts
from jofer.styles.size import Size

# Constants
MAX_WIDTH = "1150px"

BASE_STYLES = {
    
    "background_color": Color.WHITE.value,
    "font_family": Fonts.DEFAULT.value,
    
    rx.Link: {
        "text_decoration": "none",
        "_hover": {
            "color": Color.GREEN_INTENSITY3.value
        }
    }
    
}

navbar_title_style = {
    "font_family": Fonts.LOGO.value,
    "font_size": Size.LARGE.value
}








