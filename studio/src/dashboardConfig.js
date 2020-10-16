export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f8963644803e11a2cd73075',
                  title: 'Sanity Studio',
                  name: 'portfolio-studio-c5cjuqz8',
                  apiId: '52bb2460-1e17-4181-9768-297a8d83b1c8'
                },
                {
                  buildHookId: '5f896365ce900d40c1b78fb8',
                  title: 'Blog Website',
                  name: 'portfolio-web-wsgkmwxu',
                  apiId: '391f3873-4026-4406-89b7-c232210473e4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/eddiecleary/portfolio',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://portfolio-web-wsgkmwxu.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
