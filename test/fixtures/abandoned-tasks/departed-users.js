const usersData = [
  {
    id: "user1_id",
    discordId: "123456789",
    github_id: "github_user1",
    username: "archived_user1",
    first_name: "Archived",
    last_name: "User One",
    linkedin_id: "archived_user1",
    github_display_name: "archived-user-1",
    phone: "1234567890",
    email: "archived1@test.com",
    roles: {
      archived: true,
      in_discord: false,
    },
    discordJoinedAt: "2024-01-01T00:00:00.000Z",
    picture: {
      publicId: "profile/user1",
      url: "https://example.com/user1.jpg",
    },
  },
  {
    id: "user2_id",
    discordId: "987654321",
    github_id: "github_user2",
    username: "archived_user2",
    first_name: "Archived",
    last_name: "User Two",
    linkedin_id: "archived_user2",
    github_display_name: "archived-user-2",
    phone: "0987654321",
    email: "archived2@test.com",
    roles: {
      archived: true,
      in_discord: false,
    },
    discordJoinedAt: "2024-01-02T00:00:00.000Z",
    picture: {
      publicId: "profile/user2",
      url: "https://example.com/user2.jpg",
    },
  },
  {
    id: "user3_id",
    discordId: "555555555",
    github_id: "github_user3",
    username: "active_user",
    first_name: "Active",
    last_name: "User",
    linkedin_id: "active_user",
    github_display_name: "active-user",
    phone: "5555555555",
    email: "active@test.com",
    roles: {
      archived: false,
      in_discord: true,
    },
    discordJoinedAt: "2024-01-03T00:00:00.000Z",
    picture: {
      publicId: "profile/user3",
      url: "https://example.com/user3.jpg",
    },
  },
];

const tasksData = [
  {
    id: "task1_id",
    title: "Abandoned Task 1",
    type: "feature",
    status: "IN_PROGRESS",
    priority: "HIGH",
    percentCompleted: 50,
    createdAt: 1727027666,
    updatedAt: 1727027999,
    startedOn: 1727027777,
    endsOn: 1731542400,
    assignee: "archived_user1",
    assigneeId: "user1_id",
    github: {
      issue: {
        html_url: "https://github.com/org/repo/issues/1",
        url: "https://api.github.com/repos/org/repo/issues/1",
      },
    },
    dependsOn: [],
  },
  {
    id: "task2_id",
    title: "Abandoned Task 2",
    type: "bug",
    status: "BLOCKED",
    priority: "MEDIUM",
    percentCompleted: 30,
    createdAt: 1727027666,
    updatedAt: 1727027999,
    startedOn: 1727027777,
    endsOn: 1731542400,
    assignee: "archived_user2",
    assigneeId: "user2_id",
    github: {
      issue: {
        html_url: "https://github.com/org/repo/issues/2",
        url: "https://api.github.com/repos/org/repo/issues/2",
      },
    },
    dependsOn: [],
  },
  {
    id: "task3_id",
    title: "Completed Archived Task",
    type: "feature",
    status: "DONE",
    priority: "LOW",
    percentCompleted: 100,
    createdAt: 1727027666,
    updatedAt: 1727027999,
    startedOn: 1727027777,
    endsOn: 1731542400,
    assignee: "archived_user1",
    assigneeId: "user1_id",
    github: {
      issue: {
        html_url: "https://github.com/org/repo/issues/3",
        url: "https://api.github.com/repos/org/repo/issues/3",
      },
    },
    dependsOn: [],
  },
  {
    id: "task4_id",
    title: "Active User Task",
    type: "feature",
    status: "IN_PROGRESS",
    priority: "HIGH",
    percentCompleted: 75,
    createdAt: 1727027666,
    updatedAt: 1727027999,
    startedOn: 1727027777,
    endsOn: 1731542400,
    assignee: "active_user",
    assigneeId: "user3_id",
    github: {
      issue: {
        html_url: "https://github.com/org/repo/issues/4",
        url: "https://api.github.com/repos/org/repo/issues/4",
      },
    },
    dependsOn: [],
  },
];

module.exports = { usersData, tasksData };
