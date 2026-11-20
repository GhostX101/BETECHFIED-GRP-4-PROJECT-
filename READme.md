
# Note Taking API – Team Collaboration Guidelines

## Team Structure
**Team:** Note Taking API  
**Team Size:** 16 Members  
**Project Type:** Collaborative Backend API Development

## 1. General GitHub Rules

All team members must follow these rules:

1. Each member must work on their assigned task only.
2. Each member must create and work on their assigned branch.
3. Never work directly on the `main` branch.
4. Do not modify another member's assigned files without permission.
5. Every member must make at least one meaningful commit.
6. Every member must push their branch to GitHub.
7. Every member must create a Pull Request (PR) into `main`.
8. The GitHub Manager will review and merge approved PRs.
9. Do not merge your own PR without approval.
10. Always pull the latest changes before starting new work.

## 2. Project Setup

Every team member must:

1. Install Git and Visual Studio Code.
2. Accept the GitHub repository invitation.
3. Clone the repository to their local computer.

Run:

```bash
git clone YOUR_REPOSITORY_URL
```

4. Open the project folder in VS Code.
5. Open the terminal and enter:

```bash
cd note-taking-api
```

6. Check the current branch:

```bash
git branch
```

## 3. Creating Your Assigned Branch

Each member must create only their assigned branch.

Use:

```bash
git checkout -b YOUR_ASSIGNED_BRANCH
```

Example for Member 4:

```bash
git checkout -b feature/create-note
```

Before writing any code, confirm that you are working on the correct branch.

## 4. Working on Your Assigned Task

1. Work only on the file(s) assigned to you.
2. Do not delete or overwrite another member's work.
3. Follow the existing project structure.
4. Test your contribution before committing.
5. Communicate with the team if you encounter conflicts or missing dependencies.

## 5. Saving and Pushing Your Work

After completing your task, run:

```bash
git status
```

Stage your changes:

```bash
git add .
```

Commit your work:

```bash
git commit -m "Describe your changes"
```

Push your branch:

```bash
git push -u origin YOUR_ASSIGNED_BRANCH
```

Example:

```bash
git push -u origin feature/create-note
```

## 6. Creating a Pull Request

After pushing your branch:

1. Open the GitHub repository.
2. Click Compare & Pull Request.
3. Set the base branch to `main`.
4. Select your assigned branch as the compare branch.
5. Give your PR a clear title.
6. Describe what you implemented.
7. Submit the Pull Request.
8. Wait for the GitHub Manager to review and merge it.

Do not close or merge your PR yourself.

## 7. Keeping Your Branch Updated

Before starting work, update your local main branch:

```bash
git checkout main
git pull origin main
```

Return to your assigned branch:

```bash
git checkout YOUR_ASSIGNED_BRANCH
```

If your branch needs the latest changes from main:

```bash
git merge main
```

Resolve any conflicts carefully before pushing again.

## 8. Pull Request Review and Merge Order

The GitHub Manager will review contributions and merge approved PRs.

For changes involving `routes/notes.js`, follow this order:

1. Member 3 – Server Setup
2. Member 9 – Data & Seed Data
3. Member 4 – Create Note
4. Member 5 – Read All Notes
5. Member 6 – Read One Note
6. Member 7 – Update Note
7. Member 8 – Delete Note
8. Member 10 – Validation & Error Handling

These changes must be merged one after another to reduce conflicts.

Other contributions can be reviewed and merged separately when their dependencies are ready.

## 9. Communication Rules

- Notify the team when you start your task.
- Notify the GitHub Manager when your PR is ready.
- Report blockers early.
- Do not make changes to another member's assigned task without agreement.
- Ask questions when requirements are unclear.

## 10. Final Submission Requirements

At the end of the project, the team should have:

- A complete GitHub repository.
- Contributions from all 16 members.
- Individual branches and Pull Requests.
- A working Note Taking API.
- A Postman collection.
- Project and API documentation.
- Testing report.
- Five-slide presentation.
- A 3–5 minute demo video.

## Important Reminder

**1 Member = 1 Assigned Task = 1 Branch = 1 Pull Request = 1 Reviewed Merge.**

Everyone is responsible for completing, testing, committing, and submitting their own contribution.

The `main` branch must contain only reviewed and approved contributions.


##Latest Team Members:
LIST OF PROJECT CONTRIBUTOR  AND THEIR GITHUB ID  
1. MEMBER 1: folorunsoaugt648-stack
2. MEMBER 2 :         GHOSTX101
3. MEMBER 3 : Abdulazeez966
4. MEMBER 4 : Emmanuel2002Obilor
5. MEMBER 5
6. MEMBER 6 : bwealth71-blip
7. MEMBER 7
8. MEMBER 8 : IsholaMatthew11
9. MEMBER 9: tomisinoloruntoba42-rgb
10. MEMBER 10: aliyujoshua6-commits
11. MEMBER 11
12. MEMBER 12
13. MEMBER 13 : Gan-00
14. MEMBER 14
15. MEMBER 15
16. MEMBER 16.
