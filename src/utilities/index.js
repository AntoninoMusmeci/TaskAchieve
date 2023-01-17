
export const taskGroups = [
    { key: 'INBOX', name: 'Inbox' },
    { key: 'TODAY', name: 'Today' },
    { key: 'WEEK', name: 'Week' },
  ];
export const taskGroupExist = (selectedProject) => {
    return taskGroups.find(task => task.key === selectedProject)
}
export const getProjectName = (projects = [], key = "INBOX") => {
  const project = projects.find(project => project.projectId === key)

  return taskGroupExist(key)?.name || project?.name
}