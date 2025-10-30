import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'

const quarters = [
  { q: 'Q4 2025', items: ['Garmin auth hardcoded flow', 'Dashboard scaffolding', 'CRM table v0'] },
  { q: 'Q1 2026', items: ['Messaging MVP', 'Onboarding rituals', 'Public “on track” status'] },
  { q: 'Q2 2026', items: ['LocalPro layer', 'Partner directory', 'Referrals loop'] },
]

export default function ProductRoadmap() {
  return (
    <div className="space-y-4">
      {quarters.map((q) => (
        <Card key={q.q}>
          <CardHeader>
            <CardTitle>{q.q}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-1">
              {q.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}


