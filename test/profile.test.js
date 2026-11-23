import assert from 'node:assert/strict'
import test from 'node:test'
import { URL } from 'node:url'
import { experience, navigation, profile, projects, skills } from '../src/profile.ts'

test('project details have unique IDs, technologies, and a corresponding client', () => {
  assert.equal(new Set(projects.map(project => project.id)).size, projects.length)
  for (const project of projects) {
    assert.ok(experience.some(job => job.company === project.organization))
    assert.ok(project.challenge && project.approach && project.outcome && project.flow.length && project.stack.length)
  }
})

test('navigation and profile links use unique destinations', () => {
  assert.equal(new Set(navigation.map(([id]) => id)).size, navigation.length)
  assert.ok(navigation.some(([id]) => id === 'contact'))
  assert.equal(new URL(profile.linkedin).hostname, 'www.linkedin.com')
  assert.equal(new URL(profile.github).hostname, 'github.com')
  assert.match(profile.email, /^[^@]+@[^@]+$/)
  assert.ok(skills.every(category => category.items.length))
})
