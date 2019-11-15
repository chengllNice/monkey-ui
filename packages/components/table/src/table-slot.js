
export default {
    name: 'ClTableSlot',
    functional: true,
    inject: ['tableRoot'],
    props: {
        column: Object,
        __id: String,
        row: Object
    },
    render(h, context){
        const r = context.injections.tableRoot.$scopedSlots[context.props.column.slot];
        if(r){
            return h('div', r({
                row: context.props.row,
                column: context.props.column,
                __id: context.props.__id
            }));
        }
        return null;
    }
}
