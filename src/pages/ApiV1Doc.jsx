import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import VPLayout from '../components/VPLayout'
import VPSidebar from '../components/VPSidebar'
import VPSidebarLink from '../components/VPSidebarLink'
import MarkdownContent from '../components/MarkdownContent'
import { apiV1Sections } from './apiV1Data'
import '../components/VPContent.css'

function ApiV1Doc() {
  const { section } = useParams()
  const currentSection = section || 'controls'
  const [markdown, setMarkdown] = useState('')

  useEffect(() => {
    // 动态导入 Markdown 文件
    import(`./api-v1/${currentSection}.md?raw`)
      .then(module => {
        setMarkdown(module.default)
      })
      .catch(() => {
        // 如果文件不存在，显示默认内容
        setMarkdown(`# ${apiV1Sections.find(s => s.id === currentSection)?.title || '文档'}\n\n内容加载中...`)
      })
  }, [currentSection])

  const currentSectionData = apiV1Sections.find(s => s.id === currentSection) || apiV1Sections[0]

  const sidebar = (
    <VPSidebar>
      {apiV1Sections.map(item => (
        <VPSidebarLink
          key={item.id}
          href={`/api-v1/${item.id}`}
          active={currentSection === item.id}
        >
          {item.title}
        </VPSidebarLink>
      ))}
    </VPSidebar>
  )

  return (
    <VPLayout sidebar={sidebar}>
      <div className="vp-content-wrapper">
        <MarkdownContent content={markdown} />
      </div>
    </VPLayout>
  )
}

export default ApiV1Doc

