export { defaultBreadcrumb } from './model/consts/defaultBreadcrumb'

export { BreadcrumbsList } from './ui/BreadcrumbsList/BreadcrumbsList'

export {
    getBreadcrumbs,
    getBreadcrumbsWithoutLast,
    getLastBreadcrumbName,
} from './model/selectors/getBreadcrumSelector/getBreadcrumbSelector'

export {
    breadcrumbsActions,
    breadcrumbsReducer,
} from './model/slices/breadcrumbsSlice'

export type { BreadcrumbsSchema } from './model/types/breadcrumbsSchema'
