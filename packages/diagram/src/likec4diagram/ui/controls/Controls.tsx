import { ActionIconGroup, Badge, Loader, Stack } from '@mantine/core'
import { openSpotlight } from '@mantine/spotlight'
import { IconFileSymlink, IconFocusCentered, IconSearch, IconZoomIn, IconZoomOut } from '@tabler/icons-react'
import { useReactFlow } from '@xyflow/react'
import { clsx } from 'clsx'
import { memo } from 'react'
import { IfNotEnabled, useDiagramEventHandlers, useEnabledFeatures } from '../../../context'
import { useMantinePortalProps } from '../../../hooks'
import { useDiagram } from '../../../hooks/useDiagram'
import { useDiagramSyncLayoutState } from '../../../hooks/useDiagramActor'
import { useDiagramContext } from '../../../hooks/useDiagramContext'
import { stopPropagation } from '../../../utils'
import { ActionIcon, Tooltip } from './_shared'
import { ChangeAutoLayoutButton } from './ChangeAutoLayoutButton'
import { LayoutDriftNotification } from './LayoutDriftNotification'
import { ManualLayoutToolsButton } from './ManualLayoutToolsButton'
import { NavigationButtons } from './NavigationButtons'
import * as css from './styles.css'

export const Controls = memo(() => {
  const { viewId, hasLayoutDrift, viewportChanged } = useDiagramContext((c) => ({
    viewId: c.view.id,
    hasLayoutDrift: c.view.hasLayoutDrift ?? false,
    viewportChanged: c.viewportChangedManually,
  }))
  const diagram = useDiagram()
  const { onOpenSource } = useDiagramEventHandlers()
  const { enableControls, enableSearch, enableNavigationButtons, enableReadOnly, enableEdgeEditing, enableVscode } =
    useEnabledFeatures()
  const notReadOnly = !enableReadOnly
  const portalProps = useMantinePortalProps()
  const { zoomIn, zoomOut } = useReactFlow()
  return (
    <>
      <Stack
        className={clsx('react-flow__panel', css.panel, 'likec4-top-left-panel')}
        align="flex-start"
        onClick={stopPropagation}
        gap={'xs'}
      >
        {enableNavigationButtons && <NavigationButtons />}
        <ActionIconGroup className={css.actionIconGroup} orientation="vertical">
          {enableControls && enableSearch && (
            <Tooltip label="Search (Ctrl+F or ⌘+F)" {...portalProps}>
              <ActionIcon
                onClick={(e) => {
                  e.stopPropagation()
                  openSpotlight()
                }}
              >
                <IconSearch />
              </ActionIcon>
            </Tooltip>
          )}
          {enableVscode && (
            <Tooltip label="Open source" {...portalProps}>
              <ActionIcon
                onClick={(e) => {
                  e.stopPropagation()
                  onOpenSource?.({ view: viewId })
                }}
              >
                <IconFileSymlink stroke={1.5} />
              </ActionIcon>
            </Tooltip>
          )}
          {enableControls && hasLayoutDrift && <LayoutDriftNotification {...portalProps} />}
          {enableControls && notReadOnly && (
            <>
              <ChangeAutoLayoutButton {...portalProps} />
              <ManualLayoutToolsButton {...portalProps} />
            </>
          )}
          {enableControls && (
            <Tooltip label={'Recenter'} {...portalProps}>
              <ActionIcon
                onClick={(e) => {
                  e.stopPropagation()
                  diagram.fitDiagram()
                }}
              >
                <IconFocusCentered />
              </ActionIcon>
            </Tooltip>
          )}
        </ActionIconGroup>
        {notReadOnly && <SyncLayoutBadge />}
        <Tooltip label="Zoom In" {...portalProps}>
          <ActionIcon
            onClick={(e) => {
              e.stopPropagation()
              zoomIn()
            }}
          >
            <IconZoomIn />
          </ActionIcon>
        </Tooltip>
        <Tooltip label="Zoom Out" {...portalProps}>
          <ActionIcon
            onClick={(e) => {
              e.stopPropagation()
              zoomOut()
            }}
          >
            <IconZoomOut />
          </ActionIcon>
        </Tooltip>
      </Stack>
    </>
  )
})

const SyncLayoutBadge = () => {
  const isPending = useDiagramSyncLayoutState((s) => s.hasTag('pending'))
  if (!isPending) return null
  return (
    <Badge color="pink" radius={'xs'} size="xs" variant="light" leftSection={<Loader color={'orange'} size={8} />}>
      Pending...
    </Badge>
  )
}
