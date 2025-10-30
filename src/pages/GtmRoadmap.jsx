import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'

const phases = [
  { title: 'Pre-Socialization (Nov–Dec 2025)', bullets: ['Narrative drafts', 'List target believers', 'Seed content in 3 channels'] },
  { title: 'Raise Window (Jan–Mar 2026)', bullets: ['Investor list + warm intros', 'Signals: waitlist + weekly ship log', 'Founder updates cadence'] },
  { title: 'Activation (Apr 2026)', bullets: ['Pilot users live', 'Weekly customer calls', 'Public build-in-open posts'] },
  { title: 'Hyper-Local Scale (May–Dec 2026)', bullets: ['City-by-city playbook', 'Partner flywheels', 'Community-led referrals'] },
]

export default function GtmRoadmap() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {phases.map((p) => (
        <Card key={p.title}>
          <CardHeader>
            <CardTitle>{p.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-1">
              {p.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}


