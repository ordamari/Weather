import { animate, state, style, transition, trigger } from '@angular/animations'

export default trigger('open-options', [
    state(
        'in',
        style({
            height: '0px',
            overflow: 'hidden',
            paddingBlock: '0px',
        })
    ),
    state(
        'out',
        style({
            overflow: 'default',
        })
    ),
    transition('in <=> out', animate(200)),
])
