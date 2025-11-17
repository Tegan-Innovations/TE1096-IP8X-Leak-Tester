declare namespace TcHmi {
    namespace Functions {
        namespace LeakTestersHMI {
            function MyRowClassesProvider(rowValue: {
                sHeightHMI: string;
                sLeakHMI: string;
                sPieceHMI: string;
                sTime: string;
                sDate: string;
            }, dataIndex: number, rowNumber: number): string[];
        }
    }
}
