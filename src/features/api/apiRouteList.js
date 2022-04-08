const rootUri = import.meta.env.VITE_API_URI;

export const loginUri = rootUri + '/users/login';
export const joinUri = rootUri + '/users/join';
export const logoutUri = rootUri + '/users/logout';
export const myInfoUri = rootUri + '/users/myInfo';
export const leaveUri = rootUri + '/users/leave';

export const statsUri = rootUri + '/bank/total-stats';
export const newBankUri = rootUri + '/bank/new';
export const deleteBankUri = rootUri + '/bank/remove';
export const thisYearBankListUri = rootUri + '/bank/this-year';
export const oldBankListUri = rootUri + '/bank/old-list';
export const yearListUri = rootUri + '/bank/year-list';
export const bankDetailUri = rootUri + '/bank/detail';