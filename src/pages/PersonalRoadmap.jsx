import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'

const milestones = [
  { title: 'Mindset', items: ['Daily reflection (5 min)', 'Weekly review ritual', 'Define “on track” signals'] },
  { title: 'Habits', items: ['Write 30m daily', 'Ship something small daily', 'Reach out to 1 new person'] },
  { title: 'Networking', items: ['Warm intros list (20)', 'Host monthly founder hour', 'Capture learnings in CRM'] },
]

export default function PersonalRoadmap() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {milestones.map((m) => (
        <Card key={m.title}>
          <CardHeader>
            <CardTitle>{m.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-1">
              {m.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}


