export const FilterTypes = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_DONE: 'SHOW_DONE',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
};

export const FilterActions = {
    CHANGE: 'FILTER_CHANGE'
};

export const FilterNames = {
    [FilterTypes.SHOW_ALL]: 'All',
    [FilterTypes.SHOW_ACTIVE]: 'Active',
    [FilterTypes.SHOW_DONE]: 'Done'
};
