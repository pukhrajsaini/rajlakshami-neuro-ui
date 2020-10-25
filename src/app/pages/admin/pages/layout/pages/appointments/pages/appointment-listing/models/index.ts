import * as Table from '../../../../../common/table/table.types';

type Appointment = any;
type Data = Table.Data<Appointment>;

const defaultData: Data = {
    pageIndex: 0,
    pageSize: 10,
    length: 0,
    rows: null,
};

export class AppointmentSource implements Table.Source<Appointment> {
    label = 'Appointments';
    columns: Table.Column<Appointment>[] = [
        {
            id: 'name',
            title: 'Name',
            resolve: (row: Appointment) => row.name || 'N/A'
        },
        {
            id: 'email',
            title: 'Email',
            resolve: (row: Appointment) => row.email || 'N/A'
        },
        {
            id: 'phone',
            title: 'Phone',
            resolve: (row: Appointment) => row.phone || 'N/A'
        },
        {
            id: 'createtAt',
            title: 'Created At',
            templateBy: 'createdAt'
        },
        {
            id: 'actions',
            title: 'Actions',
            center: true,
            templateBy: 'actions'
        }
    ];
    options: Table.Options = {
        index: true,
    };
    constructor(public data: Data = defaultData) {}
}
