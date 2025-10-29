import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Briefcase, Calendar } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: 'Identity and Access Management Intern',
      company: 'City National Bank of Florida',
      location: 'Hybrid',
      period: 'May 2025 – August 2025',
      responsibilities: [
        'Supported IAM initiatives by participating in Identity Governance and Administration platform, SailPoint, migration projects and engaging with stakeholders on enterprise security protocols and audit readiness.',
        'Created and maintained User Access Review (UAR) artifacts, Completeness & Accuracy (C&A) documentation, and onboarding validation reports to ensure compliance and accurate provisioning.',
        'Reviewed existing access documentation, performed SailPoint user maintenance, and investigated entitlement discrepancies by coordinating with application owners.',
        'Contributed to access governance by updating entitlement records, conducting job family analysis for role-based access planning, and supporting the maintenance of procedural documentation.',
      ],
      tags: ['SailPoint', 'IAM', 'Security', 'Compliance'],
    },
    {
      title: 'Technology Tutor',
      company: 'Miami Dade College',
      location: 'In-Person',
      period: 'May 2024 – May 2025',
      responsibilities: [
        'Provided students with academic tutoring in Java, Python, C++ programming, and Microsoft 365 platforms serving as a role model and motivating them to achieve their academic goals.',
        'Demonstrated excellent oral and written communication skills, effectively explaining complex concepts in a digestible manner.',
        'Worked well in a multi-ethnic and multi-cultural environment, fostering an inclusive learning atmosphere.',
      ],
      tags: ['Teaching', 'Java', 'Python', 'C++', 'Communication'],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-gray-900 mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Briefcase className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl text-gray-900">{exp.title}</h3>
                    <p className="text-gray-600">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-2 md:mt-0 text-gray-500">
                  <Calendar className="h-4 w-4" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className="text-gray-600 mb-4">{exp.location}</p>

              <ul className="space-y-2 mb-4">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-700">
                    <span className="text-blue-600 mt-1.5">•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag, idx) => (
                  <Badge key={idx} variant="secondary" className="bg-blue-50 text-blue-700">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
