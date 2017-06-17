import { QmkUsbLayoutArray } from "./keycodes";

export const ansi104: QmkUsbLayoutArray = [
    ["KC_ESCAPE",{x:1},"KC_F1","KC_F2","KC_F3","KC_F4",{x:0.5},"KC_F5","KC_F6","KC_F7","KC_F8",{x:0.5},"KC_F9","KC_F10","KC_F11","KC_F12",{x:0.25},"KC_PSCREEN","KC_SCROLLLOCK","KC_PAUSE"],
    [{y:0.5},"KC_GRAVE","KC_1","KC_2","KC_3","KC_4","KC_5","KC_6","KC_7","KC_8","KC_9","KC_0","KC_MINUS","KC_EQUAL",{w:2},"KC_BSPACE",{x:0.25},"KC_INSERT","KC_HOME","KC_PGUP",{x:0.25},"KC_NUMLOCK","KC_KP_SLASH","KC_KP_ASTERISK","KC_KP_MINUS"],
    [{w:1.5},"KC_TAB","KC_Q","KC_W","KC_E","KC_R","KC_T","KC_Y","KC_U","KC_I","KC_O","KC_P","KC_LBRACKET","KC_RBRACKET",{w:1.5},"KC_BSLASH",{x:0.25},"KC_DELETE","KC_END","KC_PGDOWN",{x:0.25},"KC_KP_7","KC_KP_8","KC_KP_9",{h:2},"KC_KP_PLUS"],
    [{w:1.75},"KC_CAPSLOCK","KC_A","KC_S","KC_D","KC_F","KC_G","KC_H","KC_J","KC_K","KC_L","KC_SCOLON","KC_QUOTE",{w:2.25},"KC_ENTER",{x:3.5},"KC_KP_4","KC_KP_5","KC_KP_6"],
    [{w:2.25},"KC_LSHIFT","KC_Z","KC_X","KC_C","KC_V","KC_B","KC_N","KC_M","KC_COMMA","KC_DOT","KC_SLASH",{w:2.75},"KC_RSHIFT",{x:1.25},"KC_UP",{x:1.25},"KC_KP_1","KC_KP_2","KC_KP_3",{h:2},"KC_KP_ENTER"],
    [{w:1.25},"KC_LCTRL",{w:1.25},"KC_LGUI",{w:1.25},"KC_LALT",{a:7,w:6.25},"KC_SPACE",{a:4,w:1.25},"KC_RALT",{w:1.25},"KC_RGUI",{w:1.25},"KC_APPLICATION",{w:1.25},"KC_RCTRL",{x:0.25},"KC_LEFT","KC_DOWN","KC_RIGHT",{x:0.25,w:2},"KC_KP_0","KC_KP_DOT"]
];