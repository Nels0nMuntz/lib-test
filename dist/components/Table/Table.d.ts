export interface Props {
    columns: any;
    data: any;
    noDataComponent?: any;
    clickAction?: (row: any) => void;
    customColumnWidth?: string | number;
    customYAxisPadding?: string | number;
    rest?: {
        [x: string]: any;
    };
    selected?: {
        param: string;
        val: string;
    };
    className?: string;
    sticky?: boolean;
}
declare const Table: ({ columns, data, noDataComponent, clickAction, customColumnWidth, customYAxisPadding, selected, className, sticky, ...rest }: Props) => any;
export default Table;
