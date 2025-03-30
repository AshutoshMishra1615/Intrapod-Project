import { Mail, Phone, MapPin, Globe} from "lucide-react"

export default function ResumeTemplate({ personal, experience, education, skills }) {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white rounded shadow-md overflow-hidden print:shadow-none">
        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 pb-6 border-b border-gray-200">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-800">{personal.firstName}{" "}{personal.lastName}</h1>
              <p className="text-sm text-gray-600 mt-1">{personal.profession}</p>
            </div>
            <div className="mt-4 md:mt-0 flex flex-col gap-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-gray-500" />
                <span>{personal.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-gray-500" />
                <span>{personal.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-gray-500" />
                <span>{personal.address}</span>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Professional Summary</h2>
            <p className="text-gray-600 text-sm">
              {personal.summary}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {experience.newExpData && experience.newExpData.experienceItems.length > 0 && (
              <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-3">Experience</h2>
                <div className="space-y-4">
                  <ul>
                    {experience.newExpData.experienceItems.map((exp, index) => (
                      <li key={index}>
                        <div>
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-medium text-gray-800">{exp.position}</h3>
                              <p className="text-gray-600 text-sm">{exp.company}</p>
                            </div>
                            <span className="text-gray-500 text-sm">{exp.startDate} - {exp.endDate}</span>
                          </div>
                          <p className="mt-1 text-sm text-gray-600 pl-1">{exp.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Left Column */}
          {education.educationItems && education.educationItems.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">Education</h2>
              <ul className="space-y-3">
                {education.educationItems.map((ed, index) => (
                  <li key={index}>
                    <div>
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-gray-800">{ed.degree}</h3>
                          <p className="text-gray-600 text-sm">{ed.institution}</p>
                        </div>
                        <span className="text-gray-500 text-sm">{ed.startDate} - {ed.endDate}</span>
                      </div>
                      <p className="mt-1 text-sm text-gray-600">{ed.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Right Column */}
          <div className="space-y-6">
            {/* Skills */}
            {skills.data && skills.data.skills.length > 0 && (
              <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-3">Skills</h2>
                <ul className="flex flex-wrap gap-2">
                  {skills.data.certifications.map((certificate, index) => (
                    <li key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                      {certificate.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Languages */}
            {skills.data && skills.data.languages.length > 0 && (
              <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-3">Languages</h2>
                <ul className="space-y-2">
                  {skills.data.languages.map((language, index) => (
                    <li key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-700">{language.name}</span>
                        <span className="text-sm text-gray-500">{language.level}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

             {skills.data && skills.data.certifications.length>0 && (
                <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-3">Notable Certificates</h2>
                <ul className="space-y-2">
                {skills.data.certifications.map((certificate,index) => (
                  <li key={index} className="flex justify-between">
                  <span className="text-sm text-gray-700">{certificate.name} </span>
                  <span className="text-sm text-gray-500">{certificate.date}</span>
                </li>
                ))}
                </ul>
              </div> 
             )}
    
          </div>
        </div>
      </div>
    </div>
  )
}

