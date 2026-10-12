import { describe, it, expect } from 'vitest';
import { defaultInvitation, invitationNames, templates, makePreset } from '@/lib/documents';
describe('Document studio rules', () => {
 it('provides wedding names joined with an ampersand', () => { expect(invitationNames({...defaultInvitation,first:'Temurbek',second:'Oydinoy',type:'wedding'})).toBe('Temurbek & Oydinoy'); });
 it('provides sunnat invitation names joined with va', () => { expect(invitationNames({...defaultInvitation,first:'Asadbek',second:'Ibrohimbek',type:'sunnat'})).toBe('Asadbek va Ibrohimbek'); });
 it('includes wedding and sunnat invitation styles', () => { expect(templates.find(t=>t.id==='navy')?.category).toBe('Nikoh to‘yi'); expect(templates.find(t=>t.id==='gold')?.category).toBe('Sunnat to‘yi'); });
 it('retains profession and experience preset selection', () => { expect(makePreset('accountant','Senior').job).toBe('Senior Buxgalter'); expect(makePreset('designer','Junior').skills).toContain('Figma'); });
});
