import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Table, TableBody, TableHead, TableHeader, TableRow, TableCell } from '../components/ui/table'

const pipelines = {
  Founders: [
    { name: 'Alex Rivera', role: 'Founder @ AcmeAI', status: 'Warm', next: 'Coffee chat Thu' },
    { name: 'Mia Patel', role: 'CTO @ BetaCo', status: 'New', next: 'Intro via Sam' },
  ],
  Collaborators: [
    { name: 'Jordan Lee', role: 'Product Designer', status: 'Exploring', next: 'Share brief' },
    { name: 'Priya N.', role: 'Community Builder', status: 'Warm', next: 'Pilot event' },
  ],
  Funders: [
    { name: 'Taylor Green', role: 'Angel', status: 'Warm', next: 'Send 1-pager' },
    { name: 'Jamie Chen', role: 'Fund Partner', status: 'New', next: 'Ask for intro' },
  ],
  Advisors: [
    { name: 'Chris Park', role: 'Go To Market', status: 'Active', next: 'Bi-weekly sync' },
    { name: 'Nora Fox', role: 'Product', status: 'New', next: 'Share demo' },
  ],
}

function PipelineTable({ title, rows }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Next Step</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((r, idx) => (
              <TableRow key={idx}>
                <TableCell>{r.name}</TableCell>
                <TableCell>{r.role}</TableCell>
                <TableCell>{r.status}</TableCell>
                <TableCell>{r.next}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export default function MyCRM() {
  return (
    <div className="space-y-4">
      {Object.entries(pipelines).map(([title, rows]) => (
        <PipelineTable key={title} title={title} rows={rows} />
      ))}
    </div>
  )
}


