export function ImpactStats() {
  const stats = [
    { value: "120+", label: "Countries" },
    { value: "$250M", label: "Annual Grants" },
    { value: "1,500+", label: "Partners" },
    { value: "50+", label: "Years of Impact" },
  ]

  return (
    <section className="bg-muted/50 py-12">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Our Global Impact</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            For over five decades, we've been working with partners worldwide to create lasting change
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold">{stat.value}</div>
              <div className="text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
