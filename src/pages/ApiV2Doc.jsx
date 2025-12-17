import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import VPLayout from '../components/VPLayout'
import VPSidebar from '../components/VPSidebar'
import VPSidebarGroup from '../components/VPSidebarGroup'
import VPSidebarLink from '../components/VPSidebarLink'
import MarkdownContent from '../components/MarkdownContent'
import { apiV2GuideSections, apiV2ApiSections } from './apiV2Data'
import '../components/VPContent.css'

function ApiV2Doc() {
  const { section } = useParams()
  const currentSection = section || 'v9'
  const [markdown, setMarkdown] = useState('')

  useEffect(() => {
    // 动态导入 Markdown 文件
    import(`./api-v2/${currentSection}.md?raw`)
      .then(module => {
        setMarkdown(module.default)
      })
      .catch(() => {
        // 如果文件不存在，显示默认内容
        const allSections = [...apiV2GuideSections, ...apiV2ApiSections]
        const currentSectionData = allSections.find(s => s.id === currentSection)
        setMarkdown(`# ${currentSectionData?.title || '文档'}\n\n内容加载中...`)
      })
  }, [currentSection])

  const sidebar = (
    <VPSidebar>
      <VPSidebarGroup title="指南">
        {apiV2GuideSections.map(item => (
          <VPSidebarLink
            key={item.id}
            href={`/api-v2/${item.id}`}
            active={currentSection === item.id}
          >
            {item.title}
          </VPSidebarLink>
        ))}
      </VPSidebarGroup>
      
      <VPSidebarGroup title="API文档">
        {apiV2ApiSections.map(item => (
          <VPSidebarLink
            key={item.id}
            href={`/api-v2/${item.id}`}
            active={currentSection === item.id}
          >
            {item.title}
          </VPSidebarLink>
        ))}
      </VPSidebarGroup>
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

export default ApiV2Doc

