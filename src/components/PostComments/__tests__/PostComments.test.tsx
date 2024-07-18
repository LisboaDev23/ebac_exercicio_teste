import { fireEvent, render, screen } from "@testing-library/react"
import PostComment from '../index'

describe('TODOS OS TESTES PARA INSERÇÃO DE COMENTÁRIOS', () => {
    
    test('Verificar se o campo e se o botão estão renderizados!', () => {
        render(<PostComment />)
        expect(screen.getByTestId('btn-add-comentario')).toBeInTheDocument()
        expect(screen.getByTestId('input-comentario')).toBeInTheDocument()
    })

    test('Verificar se ao adicionar dois comentários, eles estão sendo renderizados!', () => {
        render(<PostComment />)
        fireEvent.change(screen.getByTestId('input-comentario'), {
            target: {
                value: 'Que legal!'
            }
        })
        expect(screen.getByText('Que legal!')).toBeInTheDocument()
        fireEvent.click(screen.getByTestId('btn-add-comentario'))
        fireEvent.change(screen.getByTestId('input-comentario'), {
            target: {
                value: 'Fofo e muito lindo!'
            }
        })
        fireEvent.click(screen.getByTestId('btn-add-comentario'))
        expect(screen.getByText('Fofo e muito lindo!')).toBeInTheDocument()
    })
})