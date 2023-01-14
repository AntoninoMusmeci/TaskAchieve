
export const taskGroups = [
    { key: 'INBOX', name: 'Inbox' },
    { key: 'TODAY', name: 'Today' },
    { key: 'WEEK', name: 'Week' },
  ];
export const taskGroupExist = (selectedProject) => {
    return taskGroups.find(task => task.key === selectedProject)
}