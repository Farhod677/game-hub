import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms, { Platform } from '../hooks/usePlatforms'

interface Props {
  platform: Platform | null
  onSelectPlatform: (platform: Platform) => void
}

const PlatformSelector = ({ platform, onSelectPlatform }: Props) => {
  const { data: platforms, error } = usePlatforms()

  if (error) return null
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {platforms.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
            key={platform.slug}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default PlatformSelector
