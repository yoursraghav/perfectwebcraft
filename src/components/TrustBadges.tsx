const badges = [
  ['99.9%', 'Uptime guarantee'],
  ['Zero', 'Maintenance hassle'],
  ['SSL', 'Encrypted by default'],
  ['24/7', 'Monitoring coverage'],
]

export function TrustBadges() {
  return (
    <section className="border-y border-slate-800 bg-slate-900/50">
      <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-y divide-slate-800 border-x border-slate-800 sm:grid-cols-4 sm:divide-y-0 lg:px-8">
        {badges.map(([value, label]) => (
          <div key={label} className="px-5 py-8 text-center sm:px-7">
            <p className="text-2xl font-semibold tracking-tight text-white">{value}</p>
            <p className="mt-1 text-sm text-slate-400">{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrustBadges
