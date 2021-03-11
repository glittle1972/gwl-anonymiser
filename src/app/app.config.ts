import { File } from './model/file.model';

const WORKDAY: File = new File('Workday', ['id', 'first_name', 'last_name', 'email', 'department', 'start_date', 'term_date' ])
const AD: File = new File('Active Directory', ['id', 'group_membership' ]);
const ACCESSABLE: File = new File('AccessAble', ['id', 'spright' ]);
const SLACK: File = new File('Slack', ['id', 'channels' ]);

export default [ WORKDAY, AD, ACCESSABLE, SLACK ];
