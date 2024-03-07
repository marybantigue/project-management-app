export type Project = {
  id: string
  name: string
  short_description: string | null
  description: string | null
  specifications: string | null
  status: string
  date_created: string
  date_updated: string
}

export const projects: Project[] = [
  {
    id: '3b275cd4-9f95-4167-aedd-2a885a1ef28e',
    status: 'published',
    date_created: '2024-02-23T07:19:17.480Z',
    date_updated: '2024-02-23T07:25:47.062Z',
    name: 'Project Monitor',
    short_description: null,
    specifications: 'CRUD projects with nextjs',
    description: null
  },
  {
    id: '3b275cd4-9f95-4167-aedd-2a885a1edfe2gdse',
    status: 'published',
    date_created: '2024-02-20T07:19:17.480Z',
    date_updated: '2024-02-20T07:25:47.062Z',
    name: 'Exciting Project',
    short_description: 'This is a short description',
    specifications:
      'Reprehenderit reprehenderit pariatur esse in esse sint anim cillum anim elit. Do fugiat consequat ex dolor. Incididunt Lorem deserunt elit ex dolore. Enim et velit ullamco est et deserunt tempor laboris commodo culpa adipisicing labore aliqua ullamco. Ullamco deserunt fugiat ipsum laborum voluptate est ad aute ex. Laboris proident laborum aliqua do non dolor ipsum officia veniam elit.',
    description:
      'Incididunt consequat Lorem velit consectetur labore aute minim esse esse commodo anim sunt ea. Eiusmod sit id pariatur incididunt consectetur. Tempor voluptate consequat tempor sunt cillum dolor ad. Mollit id officia incididunt laboris. Aliquip reprehenderit enim occaecat excepteur proident elit laborum. Nostrud enim consectetur mollit consectetur eiusmod Lorem aliquip et qui ea pariatur cupidatat.'
  },
  {
    id: '7gjhg789-9f95-4167-aedd-2a885a1ef28e',
    status: 'published',
    date_created: '2024-02-13T07:19:17.480Z',
    date_updated: '2024-02-13T07:25:47.062Z',
    name: 'Project Monitor',
    short_description:
      'Amet adipisicing qui laboris nisi elit aute excepteur consectetur eu officia consequat pariatur.',
    specifications:
      'Incididunt sint ad irure minim esse aliquip cillum et esse. Ullamco velit sunt laborum amet aliqua quis ullamco consectetur. Irure ut pariatur labore ullamco magna aute ipsum aliquip cillum exercitation dolor. Magna ad dolor do culpa. Do est Lorem ullamco ut occaecat nulla. Ad ex consequat cillum est nisi aliqua voluptate anim ex officia officia non. Dolor laborum non eiusmod quis labore labore.',
    description:
      'Ex aliquip occaecat reprehenderit cillum fugiat non irure qui nisi aute fugiat do do nisi. Magna anim esse voluptate nulla. Ipsum eu irure consectetur consectetur duis amet amet.'
  }
]
