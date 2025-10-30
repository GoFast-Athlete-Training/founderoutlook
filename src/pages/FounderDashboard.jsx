import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Link } from 'react-router-dom'

const stats = [
  { label: 'Investor Leads', value: 24 },
  { label: 'Total Funding Committed', value: '$50,000' },
  { label: 'Total Customers', value: 8 },
]

const tasks = [
  'Email 3 investor intros from yesterday’s list',
  'Ship Product Roadmap outline v1',
  'Schedule 2 customer discovery calls',
]

export default function FounderDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((s) => (
          <Card key={s.label}>
            <CardHeader>
              <CardTitle className="text-base text-zinc-500">{s.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{s.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link to="/personal">
          <Card className="hover:shadow-md transition">
            <CardHeader>
              <CardTitle>My Personal Roadmap</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-zinc-600">Mindset, habits, and network momentum.</p>
            </CardContent>
          </Card>
        </Link>
        <Link to="/gtm">
          <Card className="hover:shadow-md transition">
            <CardHeader>
              <CardTitle>GTM Roadmap</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-zinc-600">Pre-socialization through early activation.</p>
            </CardContent>
          </Card>
        </Link>
        <Link to="/product">
          <Card className="hover:shadow-md transition">
            <CardHeader>
              <CardTitle>Product Roadmap</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-zinc-600">Quarterly, tangible milestones.</p>
            </CardContent>
          </Card>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Today’s Tasks</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 space-y-2">
            {tasks.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}


