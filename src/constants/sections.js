import HeroSection from '@/components/sections/HeroSection.vue';
import ProfileSection from '@/components/sections/ProfileSection.vue';
import StackSection from '@/components/sections/StackSection.vue';
import ProjectsSection from '@/components/sections/ProjectsSection.vue';
import ContactSection from '@/components/sections/ContactSection.vue';

export const sections = [
  { name: 'home', id: 'hero', tag: HeroSection },
  { name: 'profile', id: 'profile', tag: ProfileSection },
  { name: 'stack', id: 'stack', tag: StackSection },
  { name: 'projects', id: 'projects', tag: ProjectsSection },
  { name: 'contact', id: 'contact', tag: ContactSection },
];
